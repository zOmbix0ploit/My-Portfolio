export function createStatusBadge(statusText = 'Available for Projects'): HTMLElement {
    const container = document.createElement('div');
    container.className = 'nav-status';
    container.title = 'Current Professional Availability';
    const dot = document.createElement('span');
    dot.className = 'status-dot';
    const text = document.createElement('span');
    text.textContent = statusText;
    container.appendChild(dot);
    container.appendChild(text);
    return container;
}
