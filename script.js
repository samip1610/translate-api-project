// script.js
document.getElementById('translate-button').addEventListener('click', function() {
    const sourceLanguage = document.getElementById('source-language').value;
    const targetLanguage = document.getElementById('target-language').value;
    const textToTranslate = document.getElementById('source-text').value;

    // Basic validation
    if (!textToTranslate) {
        alert('Please enter text to translate!');
        return;
    }

    // Define the API endpoint
    const apiUrl = 'https://libretranslate.de/translate';

    // Set up the translation request
    const requestData = {
        q: textToTranslate,
        source: sourceLanguage,
        target: targetLanguage,
        format: 'text'
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        // Show the translated text in the output textarea
        document.getElementById('translated-text').value = data.translatedText;
    })
    .catch(error => {
        alert('Error occurred: ' + error);
    });
});
