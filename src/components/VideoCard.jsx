import React from "react";
import { useState, useEffect } from "react";
import { Typography, Stack, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{ width: 358, height: 180 }}
        ></CardMedia>
      </Link>
    </Card>
  );
};

export default VideoCard;
