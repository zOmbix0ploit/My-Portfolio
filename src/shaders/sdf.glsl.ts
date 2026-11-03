export const sdfFunctionsGLSL = `
  // Analytic Curl Noise
  vec3 potential(vec3 p) {
    return vec3(
      sin(p.y + cos(p.z * 1.5)) * 0.5 + sin(p.z * 0.8),
      sin(p.z + cos(p.x * 1.5)) * 0.5 + sin(p.x * 0.8),
      sin(p.x + cos(p.y * 1.5)) * 0.5 + sin(p.y * 0.8)
    );
  }

  vec3 curlNoise(vec3 p) {
    const float e = 0.001;
    vec3 dx = vec3(e, 0.0, 0.0);
    vec3 dy = vec3(e, 0.0, 0.0);
    vec3 dz = vec3(0.0, 0.0, e);

    vec3 p_x0 = potential(p - dx);
    vec3 p_x1 = potential(p + dx);
    vec3 p_y0 = potential(p - dy);
    vec3 p_y1 = potential(p + dy);
    vec3 p_z0 = potential(p - dz);
    vec3 p_z1 = potential(p + dz);

    float x = (p_y1.z - p_y0.z) - (p_z1.y - p_y0.y);
    float y = (p_z1.x - p_z0.x) - (p_x1.z - p_x0.z);
    float z = (p_x1.y - p_x0.y) - (p_y1.x - p_y0.x);

    return normalize(vec3(x, y, z) / (2.0 * e));
  }

  // Signed Distance Function: Bent sculpted torus framing the core
  float sdfShape(vec3 p) {
    p.z = sqrt(p.z * p.z + 0.0215) - sqrt(0.012);

    const vec4 q = vec4(0.5, 0.5, 0.5, 0.5);
    vec3 qv = q.xyz;
    float qw = q.w;
    p = p + 2.0 * cross(qv, cross(qv, p) + qw * p);

    if (length(p) > 0.85) return length(p) - 0.7;

    vec2 ring = vec2(length(p.xz) - 0.46, p.y);
    float d = length(ring) - 0.12;
    d += sin(p.x * 5.0) * sin(p.y * 5.0) * sin(p.z * 5.0) * 0.025;
    return d;
  }

  vec3 sdfNormal(vec3 p) {
    const float eps = 0.001;
    return normalize(vec3(
      sdfShape(p + vec3(eps, 0.0, 0.0)) - sdfShape(p - vec3(eps, 0.0, 0.0)),
      sdfShape(p + vec3(0.0, eps, 0.0)) - sdfShape(p - vec3(0.0, eps, 0.0)),
      sdfShape(p + vec3(0.0, 0.0, eps)) - sdfShape(p - vec3(0.0, 0.0, eps))
    ));
  }
`;
