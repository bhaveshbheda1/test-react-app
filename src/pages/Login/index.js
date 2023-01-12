import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Img, Text, Stack, Row, Input } from "components";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/homepage");
  }
  function handleNavigate10() {
    navigate("/signupa");
  }
  function handleNavigate11() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-white_A700 items-center justify-center mx-[auto] w-[100%]">
        <Column className="bg-white_A700 lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] rounded-radius5 shadow-bs w-[39%]">
          <Column className="items-end lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
            <Img
              src="images/img_frame_29.svg"
              className="lg:h-[17px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:mx-[11px] xl:mx-[13px] 2xl:mx-[15px] 3xl:mx-[18px] opacity-op5 lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px]"
              alt="Frame"
            />
          </Column>
          <Column className="items-center lg:mb-[11px] xl:mb-[13px] 2xl:mb-[15px] 3xl:mb-[18px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
            <Column className="items-center w-[100%]">
              <Text className="font-charter font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:text-[16px] xl:text-[18px] 2xl:text-[21px] 3xl:text-[25px] text-black_900 w-[auto]">
                Welcome back.
              </Text>
              <Stack className="font-roboto lg:h-[192px] xl:h-[220px] 2xl:h-[247px] 3xl:h-[297px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[29%]">
                <Row className="absolute border border-gray_600 border-solid bottom-[34%] items-center rounded-radius42 w-[100%]">
                  <Img
                    src="images/img_frame_30.svg"
                    className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                    alt="Frame"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[29px] xl:mr-[33px] 2xl:mr-[37px] 3xl:mr-[45px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                    Sign in with Twitter
                  </Text>
                </Row>
                <Column className="absolute inset-[0] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Row
                        className="common-pointer border border-gray_600 border-solid items-center rounded-radius42 w-[100%]"
                        onClick={handleNavigate9}
                      >
                        <Img
                          src="images/img_frame_31.svg"
                          className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                          alt="Frame"
                        />
                        <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[28px] xl:mr-[32px] 2xl:mr-[36px] 3xl:mr-[44px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_900 tracking-ls1 w-[auto]">
                          Sign in with Google
                        </Text>
                      </Row>
                    </Column>
                    <Input
                      className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
                      name="Sign in with Fa"
                      placeholder="Sign in with Facebook"
                      prefix={
                        <Img
                          src="images/img_vector.svg"
                          className="lg:w-[9px] lg:ml-[2px] lg:mr-[5px] xl:w-[11px] xl:ml-[3px] xl:mr-[6px] 2xl:w-[12px] 2xl:ml-[3px] 2xl:mr-[7px] 3xl:w-[15px] 3xl:ml-[4px] 3xl:mr-[9px] my-[auto]"
                          alt="Vector"
                        />
                      }
                      shape="CircleBorder42"
                      size="md"
                      variant="OutlineGray600"
                    ></Input>
                    <Input
                      className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:mt-[9px] 3xl:mt-[10px] flex lg:mt-[7px] w-[100%] xl:mt-[8px]"
                      name="Sign in with Ap"
                      placeholder="Sign in with Apple"
                      prefix={
                        <Img
                          src="images/img_vector_1.svg"
                          className="lg:w-[7px] lg:ml-[4px] lg:mr-[5px] xl:w-[8px] xl:ml-[4px] xl:mr-[6px] 2xl:w-[9px] 2xl:ml-[5px] 2xl:mr-[7px] 3xl:w-[11px] 3xl:ml-[6px] 3xl:mr-[9px] my-[auto]"
                          alt="Vector"
                        />
                      }
                      shape="CircleBorder42"
                      size="md"
                      variant="OutlineGray600"
                    ></Input>
                    <Input
                      className="common-pointer font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] placeholder:text-gray_900 text-gray_900 tracking-ls1 w-[100%]"
                      wrapClassName="2xl:mt-[51px] 3xl:mt-[62px] flex lg:mt-[40px] w-[100%] xl:mt-[46px]"
                      onClick={handleNavigate10}
                      name="Sign in with Em"
                      placeholder="Sign in with Email"
                      prefix={
                        <Img
                          src="images/img_vector_2.svg"
                          className="lg:w-[9px] lg:ml-[2px] lg:mr-[5px] xl:w-[11px] xl:ml-[3px] xl:mr-[6px] 2xl:w-[12px] 2xl:ml-[3px] 2xl:mr-[7px] 3xl:w-[15px] 3xl:ml-[4px] 3xl:mr-[9px] my-[auto]"
                          alt="Vector"
                        />
                      }
                      shape="CircleBorder42"
                      size="md"
                      variant="OutlineGray600"
                    ></Input>
                  </Column>
                  <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Text
                      className="common-pointer font-normal lg:mx-[19px] xl:mx-[22px] 2xl:mx-[25px] 3xl:mx-[30px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 tracking-ls1 w-[auto]"
                      onClick={handleNavigate11}
                    >
                      <span className="text-black_900_b2 font-roboto">
                        No account?
                      </span>
                      <span className="text-black_900 font-roboto"> </span>
                      <span className="text-green_800 font-roboto font-bold">
                        Create one
                      </span>
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Text className="font-normal font-roboto lg:leading-[11px] xl:leading-[12px] 2xl:leading-[14px] 3xl:leading-[17px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-center text-gray_600 tracking-ls1 w-[56%]">
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
      </Column>
    </>
  );
};

export default LoginPage;
