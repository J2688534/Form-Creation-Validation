// Step 1: Define the async function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the data container element
  const dataContainer = document.getElementById('api-data');

  try {
    // Step 4: Fetch data using async/await
    const response = await fetch(apiUrl);

    // Optional: Check for HTTP error response
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const users = await response.json();

    // Step 5: Clear loading message
    dataContainer.innerHTML = '';

    // Step 6: Create a <ul> and append user names
    const userList = document.createElement('ul');

    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Handle errors
    console.error('Fetch error:', error);
    dataContainer.innerHTML = 'Failed to load user data.';
  }
}

// Step 8: Run fetchUserData once DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
