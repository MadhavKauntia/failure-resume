import React from "react";
import styles from "../styles/ResumeEntry.module.css";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ResumeEntry = ({ id, time, failure, lesson, deleteHandler, edit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <p className={styles.title}>When</p>
        <p className={styles.value}>{time}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.failure}>
        <p className={styles.title}>Failure / Regret</p>
        <p className={styles.value}>{failure}</p>
      </div>
      <div className={styles.vl}></div>
      <div className={styles.lesson}>
        <p className={styles.title}>Lesson</p>
        <p className={styles.value}>{lesson}</p>
      </div>
      <div className={styles.actions}>
        {edit && (
          <Tooltip title="Delete">
            <IconButton onClick={() => deleteHandler(id)}>
              <DeleteIcon style={{ color: "#151C27", marginRight: "0.5rem" }} />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ResumeEntry;
