let toastContainer = document.getElementById('toastBox');
let successMsg = '<i class="fas fa-check-circle"></i> Successfully submitted';
let errorMsg = '<i class="fas fa-times-circle"></i> Please fix the error!';
let invalidMsg = '<i class="fas fa-exclamation-circle"></i> Invalid input, check again';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');

    // Apply classes based on message type
    if (msg.includes('error')) {
        toast.classList.add('toast-error');
    } else if (msg.includes('Invalid')) {
        toast.classList.add('toast-invalid');
    } else {
        toast.classList.add('toast-success');
    }

    toast.innerHTML = msg;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 6000);
}
