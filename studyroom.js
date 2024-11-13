// Scroll to the top when discord button is clicked
document.getElementById("discord-btn").addEventListener("click", function() {
    window.location.href = "https://discord.com";
});

// Optionally, you could add form interactions for the 'Add Group' page
// Example function to redirect user to add group page
document.querySelector('.add-group').addEventListener('click', () => {
    window.location.href = 'add-group.html';
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText) {
        const chatBox = document.getElementById('chat-box');
        
        // Create message elements
        const message = document.createElement('div');
        message.classList.add('message');

        const profilePic = document.createElement('img');
        profilePic.src = 'profile.jpg'; // Placeholder profile picture
        profilePic.alt = 'Profile';
        profilePic.classList.add('profile-pic');

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');

        const username = document.createElement('span');
        username.classList.add('username');
        username.textContent = 'User'; // Placeholder username
        username.style.color = getRandomUsernameColor(); // Assign random color to username

        const messageTextElement = document.createElement('p');
        messageTextElement.classList.add('message-text');
        messageTextElement.textContent = messageText;

        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        messageTime.textContent = new Date().toLocaleTimeString();

        // Append elements to message content
        messageContent.appendChild(username);
        messageContent.appendChild(messageTextElement);
        messageContent.appendChild(messageTime);

        // Append profile picture and content to message
        message.appendChild(profilePic);
        message.appendChild(messageContent);

        // Add message to chat box and scroll to bottom
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear message input
        messageInput.value = '';
    }
}

// Function to get a random color for the username
function getRandomUsernameColor() {
    const colors = ['#3b5998', '#ff4500', '#4CAF50', '#FF8C00', '#9b59b6'];
    return colors[Math.floor(Math.random() * colors.length)];
}


document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const extraSection = document.getElementById('extra-section');

        if (!extraSection) {
            console.error('Element #extra-section not found!');
            return;
        }

        const extraSectionPosition = extraSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        console.log('extraSectionPosition:', extraSectionPosition); // Log section position
        console.log('screenPosition:', screenPosition); // Log threshold position

        if (extraSectionPosition < screenPosition) {
            extraSection.classList.add('visible');
            console.log('Extra section made visible'); // Confirmation message
        }
    });
});

const uploadedFiles = [];

    document.getElementById('file-upload').addEventListener('change', function () {
        const fileList = document.getElementById('file-list');
        
        // Clear existing content
        fileList.innerHTML = ''; 

        // Add files to the uploadedFiles array
        for (const file of this.files) {
            uploadedFiles.push(file.name);
        }

        // Display uploaded files
        displayFiles();
    });

    // Function to display files in the "Uploaded Files" section
    function displayFiles() {
        const fileList = document.getElementById('file-list');
        fileList.innerHTML = ''; // Clear the previous file list

        if (uploadedFiles.length === 0) {
            fileList.innerHTML = '<p>No files uploaded yet.</p>';
        } else {
            uploadedFiles.forEach(fileName => {
                const fileItem = document.createElement('p');
                fileItem.textContent = fileName;
                fileList.appendChild(fileItem);
            });
        }
    }







// Open the modal
function openModal() {
    document.getElementById("formModal").style.display = "flex";
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById("formModal").style.display = "none";
  }
  
  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
    const modal = document.getElementById("formModal");
    if (event.target === modal) {
      closeModal();
    }
  }
  
