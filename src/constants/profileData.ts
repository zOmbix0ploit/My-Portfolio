import type { PillarItem } from '@/types';
export const PILLARS_DATA: PillarItem[] = [
    {
        number: 'PILLAR 01',
        name: 'Real-Time Compute & GPU Shaders',
        description: 'Writing custom GLSL/HLSL compute shaders, particle simulations, and signed distance fields that run at 60 FPS smoothly across both desktop and mobile devices.',
    },
    {
        number: 'PILLAR 02',
        name: 'Zero-Bloat Full-Stack Systems',
        description: 'Clean domain boundaries in TypeScript and Rust, schema-first validation, and PostgreSQL relational design. Every byte of network payload and DOM node is intentional.',
    },
    {
        number: 'PILLAR 03',
        name: 'High-Concurrency Distributed Cloud',
        description: 'Containerized microservices designed for sub-15ms response times, stateless horizontal autoscaling, Redis caching layers, and zero-downtime CI/CD workflows.',
    },
    {
        number: 'PILLAR 04',
        name: 'Gameplay Mechanics & Low Latency',
        description: 'Frame-perfect action combat systems in Unreal Engine 5 and C++23. Strict memory management, cache-friendly data layouts, and deterministic game states.',
    },
];
