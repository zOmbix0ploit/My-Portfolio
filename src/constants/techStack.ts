export interface TechGroup {
    category: string;
    items: string[];
}
export const TECH_STACK: TechGroup[] = [
    {
        category: 'SYSTEMS & GAME DEV',
        items: ['C++23', 'UNREAL ENGINE 5', 'RUST', 'HLSL / GLSL', 'OPENGL / WEBGL'],
    },
    {
        category: 'FULL-STACK & CLOUD',
        items: ['TYPESCRIPT', 'NEXT.JS', 'POSTGRESQL', 'NODE.JS', 'DOCKER', 'GRAPHQL'],
    },
    {
        category: 'PRODUCTION HUBS',
        items: ['NEVUCORE.COM', 'DEV.NEVUCORE.COM'],
    },
];
