import React from 'react';

function VideoComponent() {
  const videoEmbedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/aIa9u3ZE6y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  return (
    <p dangerouslySetInnerHTML={{ __html: videoEmbedCode }}></p>
  );
}

export default VideoComponent;
