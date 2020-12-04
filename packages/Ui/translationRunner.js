const manageTranslations = require('react-intl-translations-manager').default
const writeFileSync = require('fs').writeFileSync
const stringify = require('react-intl-translations-manager/dist/stringify').default

const stringifyOpts = {
  sortKeys: true,
  space: 2,
  trailingNewline: false
}

manageTranslations({
  messagesDirectory: 'lang',
  translationsDirectory: './src/locales',
  languages: ['ru'],
  overrideCoreMethods: {
    reportLanguage: function (langResults) {
      if (
        !langResults.report.noTranslationFile &&
        !langResults.report.noWhitelistFile
      ) {
        writeFileSync(
          langResults.languageFilepath,
          stringify(langResults.report.fileOutput, stringifyOpts)
        )
        writeFileSync(
          langResults.whitelistFilepath,
          stringify(langResults.report.whitelistOutput, stringifyOpts)
        )
      } else {
        if (langResults.report.noTranslationFile) {
          // eslint-disable-next-line no-undef
          printers.printNoLanguageFile(langResults)
          writeFileSync(
            langResults,
            stringify(langResults.report.fileOutput, stringifyOpts)
          )
        }

        if (langResults.report.noWhitelistFile) {
          // eslint-disable-next-line no-undef
          printers.printNoLanguageWhitelistFile(langResults)
          writeFileSync(
            langResults.whitelistFilepath,
            stringify([], stringifyOpts)
          )
        }
      }
    }
  }
})
