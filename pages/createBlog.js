
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
  });
  const rdata = await response.json();
  return rdata;
}

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('butn');

  submit.addEventListener('click', async () => {
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      const author = document.getElementById('author').value;
      
      
      console.log('submitting data', title, content, author);

      try {
          let resp = await postData('/api/blogs', { title, content, author });
          console.log(resp);

          if (resp.success) {
            alert("Blog post created successfully");
            // Clear form fields after successful submission
            document.getElementById('title').value = '';
            document.getElementById('content').value = '';
            document.getElementById('author').value = '';
            
        } else {
            alert("Blog post creation failed. Please try again.");
        }
      } catch (error) {
          console.error('Error creating blog:', error);
          alert("An error occurred. Please try again later.");
      }
  });
});

// Fetch and display blogs

