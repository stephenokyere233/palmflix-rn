import { withExpoSnack } from "nativewind";

import { SafeAreaView, Text, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);

const MainNav = () => {
  return (
    <StyledView className="border-2 h-20 w-full fixed bottom-0">
        <StyledText>Navbar</StyledText>
    </StyledView>
  );
};

export default MainNav;
