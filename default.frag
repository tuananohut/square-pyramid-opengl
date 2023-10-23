#version 460 core
// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;
// Inputs the texture coordinates from the Vertex Shader
in vec2 texCoord;

// Gets the Texture Unit from the main function
uniform sampler2D tex0;


void main()
{
	FragColor = vec4(0.859f, 0.271f, 0.271f, 1.0f);
}