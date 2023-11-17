document.addEventListener('DOMContentLoaded', function () {
    var searchImage = document.getElementById('search-image');
    var searchPopup = document.getElementById('search-popup');

    searchImage.addEventListener('click', function (event) {
        searchPopup.style.display = 'block';
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        var isClickInside = searchPopup.contains(event.target);
        if (!isClickInside) {
            searchPopup.style.display = 'none';
        }
    });
});
function toggleDropArea(buttonId) {
        const dropArea = document.getElementById('drop-area');
        const button = document.getElementById(buttonId);

        if (dropArea.style.display === 'none') {
            dropArea.style.display = 'block';
            button.textContent = 'Finish Post';
        } else {
            dropArea.style.display = 'none';
            button.textContent = '+ Add post';
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDragEnter(event) {
        event.preventDefault();
        document.getElementById('drop-area').classList.add('highlight');
    }

    function handleDragLeave(event) {
        event.preventDefault();
        document.getElementById('drop-area').classList.remove('highlight');
    }

    function handleDrop(event) {
        event.preventDefault();
        document.getElementById('drop-area').classList.remove('highlight');

        const files = event.dataTransfer.files;

        if (files.length > 0) {
            handleFiles(files);
        }
    }

    function handleFileInput() {
        const input = document.getElementById('file-input');
        const files = input.files;

        if (files.length > 0) {
            handleFiles(files);
        }
    }

    function handleFiles(files) {
        const container = document.getElementById('image-container');

        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const imageItem = document.createElement('div');
                    imageItem.className = 'image-item';

                    const promptText = document.createElement('div');
                    promptText.textContent = 'Enter a caption (Max 70 character):';

                    const imgPreview = document.createElement('img');
                    imgPreview.src = e.target.result;
                    imgPreview.alt = 'Image Preview';
                    imgPreview.style.maxWidth = '100%';
                    imgPreview.style.maxHeight = '100px';
                    imgPreview.style.marginTop = '5px';

                    const imageName = document.createElement('input');
                    imageName.type = 'text';
                    imageName.maxLength = 70;
                    imageName.placeholder = 'Enter Caption';

                    const submitButton = document.createElement('button');
                    submitButton.textContent = 'Submit';
                    submitButton.onclick = function () {
                        const enteredName = imageName.value || '';

                        const imageCaption = document.createElement('div');
                        imageCaption.className = 'image-caption';
                        imageCaption.textContent = enteredName;

                        imageItem.innerHTML = `<img src="${e.target.result}" alt="Uploaded image">
                                              <div class="image-caption">${enteredName}</div>`;

                        const lastRow = container.lastChild;
                        if (!lastRow || lastRow.childElementCount >= 4 ) {
                            const newRow = document.createElement('div');
                            newRow.className = 'image-row';
                            container.appendChild(newRow);
                        }

                        container.lastChild.appendChild(imageItem);
                    };

                    imageItem.appendChild(promptText);
                    imageItem.appendChild(imgPreview);
                    imageItem.appendChild(imageName);
                    imageItem.appendChild(submitButton);

                    const lastRow = container.lastChild;
                    if (!lastRow || lastRow.childElementCount >= 3) {
                        const newRow = document.createElement('div');
                        newRow.className = 'image-row';
                        container.appendChild(newRow);
                    }

                    container.lastChild.appendChild(imageItem);
                };

                reader.readAsDataURL(file);
            } else {
                alert('Please choose image files.');
            }
        }
    }
