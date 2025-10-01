// VoSai Collective Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('join-collective-form');
    const messageDiv = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Show loading state
            messageDiv.innerHTML = '🌲 Sending your transmission to the forest...';
            messageDiv.style.color = '#9acd32';
            
            // Prepare form data
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                youtube: formData.get('youtube'),
                instagram: formData.get('instagram'),
                tiktok: formData.get('tiktok'),
                other: formData.get('other'),
                vibe: formData.get('vibe'),
                updates: formData.get('updates') ? true : false,
                source: 'vosai.live_join_form'
            };
            
            try {
                const response = await fetch('https://ryn8n.ssiwebonline.com/webhook/vosai-signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    const result = await response.json();
                    messageDiv.innerHTML = '🌟 ' + result.message + '<br><br>The forest has received your transmission, wanderer. Welcome to the convergence.';
                    messageDiv.style.color = '#9acd32';
                    form.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                messageDiv.innerHTML = '⚡ The transmission encountered interference in the digital realm. Please try again, or reach out to us directly at the convergence points.';
                messageDiv.style.color = '#ff6b6b';
            }
        });
    }
});