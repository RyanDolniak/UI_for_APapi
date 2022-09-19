import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavbarBreadcrumbs(): JSX.Element | null {
  const navigate = useNavigate();
  const location = useLocation();

  const pathParts = location.pathname
    .split("/")
    .filter(Boolean)
    .map((pathPart) => pathPart[0].toUpperCase() + pathPart.slice(1).toLowerCase());

  return pathParts.length > 0 ? (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" htmlColor="white" />}
      aria-label="breadcrumb"
    >
      <Link
        underline="hover"
        key="-1"
        color="white"
        fontWeight={300}
        sx={{
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Home
      </Link>
      {pathParts.slice(0, pathParts.length - 1).map((pathPart, i) => (
        <Link
          underline="hover"
          key={i}
          color="white"
          fontWeight={300}
          sx={{
            cursor: "pointer",
          }}
          // TODO: Implement going back
          // onClick={() => this.goto("/")}
        >
          {pathPart}
        </Link>
      ))}
      <Typography key={pathParts.length} color="white" fontWeight={300}>
        {pathParts.at(-1)}
      </Typography>
    </Breadcrumbs>
  ) : null;
}
