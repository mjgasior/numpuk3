import React from "react";
import styled from "styled-components";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import Badge from "@material-ui/core/Badge";
import { FileButtonLink } from "./FileButtonLink";

const Container = styled.div`
  margin-top: 7px;
`;

const Row = styled.div`
  display: flex;
`;

const Label = styled.div`
  margin-left: 16px;
`;

export function FilesList({ files, directory }) {
  return (
    <Container>
      <Grid item xs={12} md={12}>
        <Row>
          <Badge
            badgeContent={files.length}
            max={9999}
            color="primary"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <FolderIcon />
          </Badge>
          <Label>{directory}</Label>
        </Row>
        <div>
          <List dense={true}>
            {files.map((file) => (
              <ListItem key={file}>
                <ListItemIcon>
                  <FileButtonLink target={`${directory}/${file}`} />
                </ListItemIcon>
                <ListItemText primary={file} />
              </ListItem>
            ))}
          </List>
        </div>
      </Grid>
    </Container>
  );
}
