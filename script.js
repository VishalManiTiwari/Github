function getRepositories() {
    const username = document.getElementById('username').value;
    //const apiUrl = `https://api.github.com/users/${username}/repos`;
     const apiUrl = `https://docs.github.com/en/rest${username}/reference`
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const repoList = document.getElementById('repoList');
        repoList.innerHTML = ''; // Clear previous results

        data.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.classList.add('repo');
          listItem.innerHTML = `<strong>${repo.name}</strong>: ${repo.description || 'No description'}`;
          repoList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }