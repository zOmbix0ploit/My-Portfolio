export function createGlassPill(text: string, active = false, dataFilter = 'all'): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chip ${active ? 'active' : ''}`;
    btn.setAttribute('data-filter', dataFilter);
    btn.textContent = text;
    return btn;
}
