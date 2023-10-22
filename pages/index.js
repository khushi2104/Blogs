fetch('/api/blogs')
  .then(response => response.json())
  .then(blogs => {
    const blogList = document.getElementById('blogList'); // Assuming you have a container for blog display
    blogs.forEach(blog => {
      const blogItem = document.createElement('div');

     
      blogItem.classList.add('col-lg-4', 'mb-4');



      blogItem.innerHTML = `
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">${blog.title}</h5>
        <p class="card-text">${blog.content}</p>
        <a href="#" class="btn btn-outline-success btn-sm">Read More</a>
        <a href="#" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
      </div>
    </div>
      `;
      blogList.appendChild(blogItem);
    });
  })
  .catch(error => {
    console.error('Error fetching blogs:', error);
  });