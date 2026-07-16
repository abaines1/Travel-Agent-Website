document.addEventListener('DOMContentLoaded', () => {
    
    // --- Gallery Filter Engine ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Manage Active States
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- Travel Advisor Blog Database ---
    const blogData = {
        "1": {
            title: "Why Working with a Travel Advisor Beats Online Booking Platforms",
            date: "July 15, 2026",
            body: "<p>In the age of endless search engine tabs, outsourcing complex logistics ensures premium service, exclusive upgrades, and direct peace of mind.</p><p>While booking sites treat travelers like digital ticket numbers, partnering with a professional travel advisor links you to premium industry connections. From complimentary room upgrades and custom-vetted boutique spaces to direct access lines with managers, every stop on your journey is backed by direct human advocacy.</p>"
        },
        "2": {
            title: "Mastering the Stress-Free Multi-Stop European Itinerary",
            date: "June 28, 2026",
            body: "<p>A deep dive into prioritizing base locations and clean layout routing to design actual relaxing vacations instead of constant packing runs.</p><p>The biggest trap with European planning is trying to map too many cities into a tight timeline. Successful advisors rely on 'hub-and-spoke' architecture: securing a beautiful center base in a regional train hotspot and mapping out seamless day-trips. This structural approach preserves valuable exploration time without exhausting transitions.</p>"
        }
    };

    // --- Bootstrap Native Modal Configuration ---
    const blogCards = document.querySelectorAll('.blog-card');
    const modalElement = document.getElementById('bootstrapBlogModal');
    
    // Initialize Bootstrap's Native Modal API Class
    const bsModal = new bootstrap.Modal(modalElement);

    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalBody = document.getElementById('modalBody');

    blogCards.forEach(card => {
        card.addEventListener('click', () => {
            const postId = card.getAttribute('data-post-id');
            const post = blogData[postId];

            if (post) {
                modalTitle.textContent = post.title;
                modalDate.textContent = post.date;
                modalBody.innerHTML = post.body;
                
                // Fire Bootstrap Show Instance
                bsModal.show();
            }
        });
    });
});