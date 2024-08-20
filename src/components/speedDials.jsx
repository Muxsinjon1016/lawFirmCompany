import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

const actions = [
  {
    icon: <PhoneIcon />,
    name: "Phone",
    href: "tel:+998919801409",
    tooltip: "+998-91-980-1409",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    href: "mailto:muxsinjon1610@gmail.com",
    tooltip: "muxsinjon1610@gmail.com",
  },
  {
    icon: <TelegramIcon />,
    name: "Telegram",
    href: "https://t.me/Muxsinjon_Maxsudovich",
    tooltip: "T.me/Muxsinjon_Maxsudovich",
  },
];

export const SpeedDials = () => {
  return (
    <div className="">
      <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial with contact options"
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.tooltip}
              onClick={() => window.open(action.href, "_blank")}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};

export default SpeedDials;
