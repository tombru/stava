const getParameterByName = (name) => {
    const match = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export const parseTargetText = currentFilename => {
    const part = currentFilename.substring(currentFilename.indexOf("-") + 1, currentFilename.length);
    return part.substring(0, part.indexOf(".")).replace("_", " ").trim();
};

export const parseQuestion = currentFilename => currentFilename.substring(0, currentFilename.indexOf("-")).trim();

export const getKey = () =>  {
    return getParameterByName("key");
};