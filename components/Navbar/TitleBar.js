import { withExpoSnack } from "nativewind";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from "@expo/vector-icons";

import { SafeAreaView, Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const TitleBar = () => {
  return (
    <StyledView className="h-20 w-full flex justify-between flex-row items-center px-2 fixed top-0">
      <StyledText className="text-4xl font-extrabold tracking-widest uppercase text-purple-700">
        PalmFlix
      </StyledText>
      <Feather name="moon" size={32} color="black" />
    </StyledView>
  );
};

export default TitleBar;
