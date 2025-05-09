const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg'
  ];
  
  let currentIndex = 0;
  
  function openModal(index) {
    currentIndex = index;
    document.getElementById('modal').style.display = 'block';
    updateModalImage();
  }
  
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }
  
  function updateModalImage() {
    document.getElementById('modalImage').src = images[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalImage();
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalImage();
  }
  