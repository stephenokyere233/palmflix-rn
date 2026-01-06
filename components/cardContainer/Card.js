import React, { useContext } from "react";
import { Image, TouchableOpacity } from "react-native";
import { img_path } from "../../constants/keys";
import { AppContext } from "../../context/context";

const Card = ({ navigation, id, image, mediaType = "movie" }) => {
  const { setMovieID, setMediaType } = useContext(AppContext);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Movie Details");
        setMovieID(id);
        setMediaType(mediaType);
      }}
    >
      <Image
        source={{
          uri: `${img_path}${image}`,
        }}
        className="w-[170px] border p-2 bg-gray-600 m-4 rounded-lg h-[250px] object-cover"
      />
    </TouchableOpacity>
  );
};

export default Card;
