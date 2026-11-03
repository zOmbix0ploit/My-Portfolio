import type { ProjectItem } from '@/types';
export function createVideoCard(project: ProjectItem, isHeroCard = false): HTMLElement {
    const el = document.createElement('a');
    el.href = project.detailsUrl || 'projects.html';
    el.className = isHeroCard ? 'home-card' : 'project-card scroll-reveal';
    el.setAttribute('data-category', project.category);
    if (isHeroCard) {
        el.innerHTML = `
      <div class="home-thumb">
        <video
          class="card-video"
          src="${project.videoUrl}"
          width="320"
          height="150"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          crossorigin="anonymous"
        ></video>
      </div>
      <div class="card-meta">
        <div class="meta-left">${project.index} / ${project.title.slice(0, 18)}&#10;${project.tags[0] || 'Engineered'}</div>
        <div class="meta-right">${project.tags[1] || 'Details'}&#10;Explore -&gt;</div>
      </div>
    `;
    }
    else {
        const tagsHtml = project.tags.map((t) => `<span class="tag-badge">${t}</span>`).join('');
        el.innerHTML = `
      <div class="project-thumb">
        <video
          class="card-video"
          src="${project.videoUrl}"
          autoplay
          muted
          loop
          playsinline
          preload="metadata"
          crossorigin="anonymous"
        ></video>
      </div>
      <div class="project-tags">
        ${tagsHtml}
      </div>
      <h3 class="project-name">${project.index} / ${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="project-links">
        <span class="proj-link primary">Inspect System Specs &rarr;</span>
      </div>
    `;
    }
    const video = el.querySelector('video');
    if (video) {
        video.addEventListener('error', () => {
            video.style.display = 'none';
            if (video.parentElement) {
                video.parentElement.style.backgroundColor = '#121212';
            }
        });
    }
    return el;
}
