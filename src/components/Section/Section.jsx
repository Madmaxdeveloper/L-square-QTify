import styles from "./Section.module.css";
import { Box, CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../BasicTabs/BasicTabs";

const FilterSection = ({
  title,
  data = [],
  type,
  filteredData,
  filteredDataValues = [],
  value,
  handleChange,
}) => {
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>

      <BasicTabs
        value={value}
        handleChange={handleChange}
        filteredData={filteredData}
      />

      {!data || data.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardsWrapper}>
          <Carousel
            data={filteredDataValues}
            renderCardComponent={(item) => (
              <Card data={item} type={type} />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default FilterSection;