import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

import MKBox from "../../../../components/MKBox";
import MKTypography from "../../../../components/MKTypography";

function BackgroundBlogCard({image,title,description,action}){
    const cardActionStyles = {
        display: "flex",
        alignItems: "center",
        width: "max-content",
    
        "& .material-icons, .material-icons-round,": {
          transform: `translateX(2px)`,
          transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
        },
    
        "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
          {
            transform: `translateX(6px)`,
          },
        };
}