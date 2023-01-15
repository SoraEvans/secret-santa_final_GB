import React from 'react'

import { Checkbox, Divider, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Container from '../../components/style_cont'
import {
  PageBackground,
  Button,
  Input,
  InputBlock,
  InputSection,
  InputSectionTitle,
  Label,
  ProfileButton,
  ProfileForm,
  ProfileSwitch,
  ProfileTop,
  SwitchSection,
  SwitchText
} from './styles'

function Profile() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <PageBackground>
      <Container>
        <ProfileTop>
          <h2>Профиль</h2>
          <Button type='button'>Кнопка</Button>
        </ProfileTop>
        <ProfileForm>
          <InputSectionTitle>Lorem ipsum dolor</InputSectionTitle>
          <InputSection>
            <InputBlock>
              <Input id="first" type="text" placeholder="Первый" />
              <Label for="first">Первый</Label>
              <Checkbox defaultChecked
                        sx={{
                          position: 'absolute',
                          top: -25,
                          right: -160,
                          color: 'gray',
                          '& .MuiSvgIcon-root': { fontSize: 115, },
                          '&.Mui-checked': {
                            color: 'pink',
                          },
                        }} />
            </InputBlock>
          </InputSection>
          <InputSection>
            <InputBlock>
              <Input id="second" type="text" />
              <Label for="second">Второй</Label>
              <Checkbox defaultChecked
                        sx={{
                          position: 'absolute',
                          top: -25,
                          right: -160,
                          color: 'gray',
                          '& .MuiSvgIcon-root': { fontSize: 115, },
                          '&.Mui-checked': {
                            color: 'pink',
                          },
                        }} />
            </InputBlock>
          </InputSection>
          <Divider />
          <InputSectionTitle>Lorem ipsum dolor</InputSectionTitle>
          <SwitchSection>
            <SwitchText>
              <h4>Lorem ipsum</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, architecto consequatur dolor doloremque
                esse eum
                explicabo ipsa ipsam iure maiores maxime nam nostrum odio officia officiis optio quia recusandae
                repudiandae.</p>
            </SwitchText>
            <ProfileSwitch />
          </SwitchSection>
          <Divider />
          <InputSectionTitle>Lorem ipsum dolor</InputSectionTitle>
          <InputSection>
            <InputBlock>
              <FormControl id="password" sx={{
                m: 1,
                width: 642,
                height: 82,
                backgroundColor: '#F6F3F3',
                border: '2px solid #CDCCCC',
                borderRadius: 0,
                justifyContent: 'center',
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }} variant="standard">
                <InputLabel sx={{ margin: 1 }} htmlFor="adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <Label for="password">Пароль</Label>
              </FormControl>
            </InputBlock>
          </InputSection>
          <InputSectionTitle>Lorem ipsum dolor</InputSectionTitle>
          <InputSection>
            <InputBlock>
              <FormControl id="password" sx={{
                m: 1,
                width: 642,
                height: 82,
                backgroundColor: '#F6F3F3',
                border: '2px solid #CDCCCC',
                borderRadius: 0,
                justifyContent: 'center',
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: "none"
                  }
                }
              }} variant="standard">
                <InputLabel sx={{ margin: 1 }} htmlFor="adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                <Label for="password">Пароль</Label>
                <Checkbox defaultChecked
                          sx={{
                            position: 'absolute',
                            top: -25,
                            right: -160,
                            color: 'gray',
                            '& .MuiSvgIcon-root': { fontSize: 115, },
                            '&.Mui-checked': {
                              color: 'pink',
                            },
                          }} />
              </FormControl>
            </InputBlock>
          </InputSection>
          <Divider />
          <InputSectionTitle>Lorem ipsum dolor</InputSectionTitle>
        </ProfileForm>
        <ProfileButton type="submit">Сохранить</ProfileButton>
      </Container></PageBackground>
  )
}

export default Profile
