import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  //getting data
  const [data, setData] = useState(null);

  //to filter by search
  const [filteredData, setFilteredData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedButton, setSectedButton] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchFoodData();
  }, []);

  //search functionality
  const searchFood = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  //filter by course(breakfast,lunch ...

  const filterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSectedButton("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSectedButton(type);
  };

  const filterButtons = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading</div>;
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <h1>FOODIE ZONE</h1>
          </div>

          <div className="searchbar">
            <input
              onChange={searchFood}
              placeholder="Search Food"
              type="text"
            />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterButtons.map((value) => (
            <Button
              isSelectedButton={selectedButton === value.type}
              key={value.name}
              onClick={() => filterFood(value.type)}
            >
              {value.name}
            </Button>
          ))}
          
        </FilterContainer>
      </Container>

      <SearchResult data={filteredData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    background: linear-gradient(
      90deg,
      rgba(171, 219, 178, 1) 41%,
      rgba(240, 86, 14, 1) 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 2px;
  }
`;

const TopContainer = styled.section`
  font-family: "Vina Sans", cursive;
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .searchbar {
    input {
      background-color: transparent;
      border: 1px solid red;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      color: white;
    }
  }

  @media (0<width<600px) {
    flex-direction: column;
    height: 60px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 0.3125rem;
  background: ${({ isSelectedButton }) => (isSelectedButton ? "#A93226" : "#ff4343")};
  outline: 2px solid ${({ isSelectedButton }) => (isSelectedButton ? "white" : "#ff4343")};

  color: white;
  padding: 6px 12px;
  border: none;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    background-color: #f22f2f;
  }
`;
