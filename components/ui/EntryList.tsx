import { List, Paper } from "@mui/material";
import { EntryCard } from "./";

export const EntryList = () => {
  return (
    // TODO: aquí haremos drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "auto",
          backgroundColor: "transparent",
          padding: "3px 5px",
        }}
      >
        {/* Todo: cambiara dependiendo si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
