import React, { useContext } from "react";
import { Image, TouchableOpacity } from "react-native";
import { img_path } from "../../constants/keys";
import { AppContext } from "../../context/context";

const Card = (props) => {
  const { movieID, setMovieID } = useContext(AppContext);
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Movie Details");
        setMovieID(props.id);
        console.log(props.id);
      }}
    >
      <Image
        source={{
          uri: `${img_path}${props.image}`,
          cache: "only-if-cached",
        }}
        className="w-[170px] border p-2 bg-gray-600  m-4 rounded-lg h-[250px] object-cover"
      />
    </TouchableOpacity>
  );
};

export default Card;
