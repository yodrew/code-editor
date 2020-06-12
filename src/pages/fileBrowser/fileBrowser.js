//jshint ignore:start
/**
 * 
 * @param {"file"|"dir"} [type='file']
 * @param {string|function(string):boolean} option button text or function to check extension
 */
function FileBrowser(type, option) {
    return new Promise((resolve, reject) => {
        import( /* webpackChunkName: "fileBrowser" */ './fileBrowser.include')
            .then(res => {
                const FileBrowser = res.default;
                FileBrowser(type, option)
                    .then(resolve)
                    .catch(reject);
            });
    });
}

export default FileBrowser;