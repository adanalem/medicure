window.addEventListener('DOMContentLoaded', () => {

    const menubtn = document.getElementById('menu-button');
    const nav = document.getElementById('nav-link');
    const links = document.querySelectorAll('#nav-link a');

    // Security Check: Agar elements page par maujood hain tabhi code chale
    if (menubtn && nav) {
        
        // Menu button click logic
        menubtn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
            nav.classList.toggle('flex');
        });

        // Links click logic
        links.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.add('hidden');
                nav.classList.remove('flex'); 
                console.log(link.innerText);
            });
        });
    }


const dateInput = document.getElementById('appointmentDate');
const deptSelect = document.getElementById('departmentselect');
const statusBox = document.getElementById('statusBox');

// 1. Yahan B ko small 'bookingForm' kar diya hai
const bookingForm = document.getElementById('appointmentForm'); 

// Past date time block
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// 2. Active listening feedback checks
function checkFormSlots() {
    if (dateInput.value && deptSelect.value) {
        statusBox.classList.remove('hidden');
    }
}

dateInput.addEventListener('change', checkFormSlots);
deptSelect.addEventListener('change', checkFormSlots);

// 3. Prevent reload processing logic
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const patientName = document.getElementById('name').value;
    Swal.fire({
        icon: 'success',
        title: 'Appointment Booked!',
        text: `Thank you ${patientName}! Your Medicure appointment booking has been submitted.`
    });

    bookingForm.reset();
    statusBox.classList.add('hidden');
});


});
