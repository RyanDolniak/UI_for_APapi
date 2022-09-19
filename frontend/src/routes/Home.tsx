import React from "react";
import BaseComponent from "$lib/BaseComponent";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import NewsCard from "$lib/NewsCard";

import Mastercard1 from "$assets/Mastercard1.png";
import Mastercard2 from "$assets/Mastercard2.png";

export default class Home extends BaseComponent {
  public render(): React.ReactNode {
    return (
      
      <Container>
        <Stack direction="row" justifyContent="center" spacing={4} pt={16}>
          <NewsCard
            image={Mastercard1}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat diam ut venenatis tellus in metus vulputate. Tincidunt arcu non sodales neque sodales ut etiam. Condimentum vitae sapien pellentesque habitant. Nunc sed id semper risus in hendrerit gravida rutrum. Duis at consectetur lorem donec. Mauris augue neque gravida in fermentum et. Egestas sed tempus urna et pharetra. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Sed enim ut sem viverra aliquet eget sit. Sit amet volutpat consequat mauris nunc congue. Justo donec enim diam vulputate ut pharetra sit amet. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Id diam maecenas ultricies mi eget mauris pharetra. Augue eget arcu dictum varius. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque."
          />
          <NewsCard
            image={Mastercard2}
            title="Lorem ipsum dolor sit amet"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet enim tortor at auctor urna. Cras pulvinar mattis nunc sed blandit. Accumsan in nisl nisi scelerisque eu. Ac felis donec et odio pellentesque. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Venenatis cras sed felis eget. Posuere morbi leo urna molestie. In fermentum posuere urna nec. Non nisi est sit amet facilisis magna etiam tempor. Dictumst quisque sagittis purus sit amet volutpat."
          />
        </Stack>
      </Container>
        
    );
  }
}
