import CategoryMenu from "../../category-menu/category-menu.component";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startRolodexFetch } from "../../../store/rolodex/rolodex.actions";
import { selectRolodexData } from "../../../store/rolodex/rolodex.selector";

const TestItem = styled.div`
  background-color: blue;
`;

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startRolodexFetch());
  }, [dispatch]);

  const rolodexes = useSelector(selectRolodexData);

  console.log(rolodexes);

  let testItemRef;
  const [shouldDisplay, setShouldDisplay] = useState(true);
  const toggleVisibility = (e) => {
    console.log(testItemRef);
    setShouldDisplay(!shouldDisplay);
    e.preventDefault();
  };
  return (
    <div>
      <CategoryMenu />
      <TestItem
        style={{ display: shouldDisplay ? "block" : "none" }}
        ref={testItemRef}
      >
        Kabaji is a GOAT
      </TestItem>
      <button onClick={toggleVisibility}>Click me to show or hide</button>
    </div>
  );
};

export default Home;
