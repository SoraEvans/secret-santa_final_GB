import React, { useRef } from 'react';
import { Divider } from "@mui/material";
import { CarouselButton } from "../carousel/style";
import {
  AddAvatarButton,
  AvatarImg,
  AvatarList,
  CreateCardWrapper,
  FormLabel,
  Input,
  InputSection,
} from "../WardCard/style";


const MyCardCreate = () => {
  const fileRef = useRef(null);


  return (
    <CreateCardWrapper>
      <Divider />
      <FormLabel>Создайте карточку участника для себя, если хотите принимать участие в жеребьевке</FormLabel>
      <form>
        <InputSection>
          <Input type="text" placeholder="Ваше имя или никнейм" />
          <Input type="text" placeholder="Номер телефона" />
        </InputSection>
        <FormLabel>Выберите аватар</FormLabel>
        <AvatarList>
          <AvatarImg>1</AvatarImg>
          <AvatarImg>2</AvatarImg>
          <AvatarImg>3</AvatarImg>
          <input
            type="file"
            accept="image/png,image/jpeg,image/gif"
            style={{ display: 'none' }}
            ref={fileRef}
          />
          <AddAvatarButton
            onClick={() => fileRef.current?.click()}
          >+ </AddAvatarButton>
        </AvatarList>
        <CarouselButton style={{ margin: 0 }}>Создать карточку</CarouselButton>
      </form>
    </CreateCardWrapper>
  )
}

export default MyCardCreate;