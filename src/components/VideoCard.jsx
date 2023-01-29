import React from "react";
import { useState, useEffect } from "react";
import { Typography, Stack, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
    <Card
      sx={{
        width: { xs: "100%", sm: "348px", md: "300px" },
        m: "10px",
        boxShadow: "none",
        borderRadius: "none",
      }}
    >
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={video?.snippet?.title}
          sx={{ width: { xs: "100%", sm: "348px", md: "300px" }, height: 180 }}
        ></CardMedia>
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            video.snippet?.channelId
              ? `/channel/${video.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {video.snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
