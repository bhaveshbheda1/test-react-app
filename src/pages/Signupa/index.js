import React from "react";

import { useNavigate } from "react-router-dom";
import { Stack, Column, Img, Text, Line, Button, Row } from "components";

const SignupaPage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    navigate("/homepage");
  }
  function handleNavigate5() {
    navigate("/");
  }

  return (
    <>
      <Stack className="bg-white_A700 lg:h-[565px] xl:h-[646px] 2xl:h-[726px] 3xl:h-[871px] mx-[auto] w-[100%]">
        <div className="absolute bg-white_A700 lg:h-[397px] xl:h-[454px] 2xl:h-[511px] 3xl:h-[613px] inset-[0] justify-center m-[auto] rounded-radius5 shadow-bs w-[39%]"></div>
        <Column className="absolute h-[max-content] inset-y-[0] my-[auto] right-[32%] w-[29%]">
          <Img
            src="images/img_frame_34.svg"
            className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] opacity-op5 lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
            alt="Frame"
          />
          <Column className="items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
            <Column className="items-center w-[100%]">
              <Text className="font-charter font-normal lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-black_900 w-[auto]">
                Sign in with email
              </Text>
              <Text className="font-normal font-sfprodisplay xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[88px] lg:mt-[60px] xl:mt-[69px] 2xl:mt-[78px] 3xl:mt-[93px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                Enter your email here
              </Text>
              <Text className="font-normal font-sfprodisplay lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 tracking-ls1 w-[auto]">
                email@example.com
              </Text>
              <Text className="font-normal font-sfprodisplay 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[82px] xl:ml-[94px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                Enter your password here
              </Text>
              <Column className="font-sfprodisplay items-center lg:ml-[53px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] lg:mt-[11px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[17px] w-[42%]">
                <Text className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 tracking-ls1 w-[auto]">
                  ****
                </Text>
                <Line className="bg-gray_600 h-[1px] mt-[4px] w-[100%]" />
              </Column>
              <Button
                className="common-pointer font-normal font-sfprodisplay lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center tracking-ls1 w-[38%]"
                onClick={handleNavigate4}
                shape="CircleBorder41"
                size="lg"
                variant="FillGray900"
              >
                Continue
              </Button>
              <Row
                className="common-pointer font-sfprodisplay 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[85px] xl:ml-[97px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[22%]"
                onClick={handleNavigate5}
              >
                <Img
                  src="images/img_chevronleft.svg"
                  className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                  alt="chevronleft"
                />
                <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-green_800 tracking-ls1 w-[auto]">
                  All sign in options
                </Text>
              </Row>
              <Text className="font-normal font-roboto lg:leading-[11px] xl:leading-[12px] 2xl:leading-[14px] 3xl:leading-[17px] lg:mr-[5px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[9px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-center text-gray_600 tracking-ls1 w-[74%]">
                <span className="text-gray_600">
                  Click “Sign In” to agree to Medium’s{" "}
                </span>
                <span className="text-gray_600 underline">
                  Terms of Service
                </span>
                <span className="text-gray_600">
                  {" "}
                  and acknowledge that
                  <br />
                  Medium’s{" "}
                </span>
                <span className="text-gray_600 underline">Privacy Policy</span>
                <span className="text-gray_600"> applies to you.</span>
              </Text>
            </Column>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default SignupaPage;
