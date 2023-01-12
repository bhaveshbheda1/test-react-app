import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Stack, Line, Text, Button, Input } from "components";

const YourStories1Page = () => {
  const navigate = useNavigate();

  function handleNavigate8() {
    navigate("/notofication");
  }

  return (
    <>
      <Column className="bg-white_A700 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Row className="items-center w-[77%]">
          <Row className="items-center justify-evenly w-[7%]">
            <Column className="bg-white_A700 items-center w-[100%]">
              <Img
                src="images/img_frame_24.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]"
                alt="Frame"
              />
              <Column className="items-center lg:mt-[156px] xl:mt-[178px] 2xl:mt-[201px] 3xl:mt-[241px] w-[100%]">
                <Stack className="lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[182px] w-[23%]">
                  <Img
                    src="images/img_group1_6.svg"
                    className="absolute lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[182px] inset-[0] w-[100%]"
                    alt="Group1"
                  />
                  <Img
                    src="images/img_frame_25.svg"
                    className="common-pointer absolute lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] top-[29%] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    onClick={handleNavigate8}
                    alt="Frame"
                  />
                </Stack>
                <Line className="bg-black_900 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] opacity-op8 w-[23%]" />
                <Img
                  src="images/img_frame_26.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                  alt="Frame"
                />
              </Column>
              <Img
                src="images/img_unsplashhskble_5.png"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[156px] xl:mt-[179px] 2xl:mt-[201px] 3xl:mt-[242px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="unsplashhSKBle"
              />
            </Column>
            <Line className="bg-black_900 h-[1px] opacity-op12 rotate-[90deg] w-[1%]" />
          </Row>
          <Column className="items-center 2xl:ml-[111px] 3xl:ml-[134px] lg:ml-[86px] xl:ml-[99px] w-[50%]">
            <Column className="items-center w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[31px] 3xl:text-[37px] text-gray_900 w-[auto]">
                  Marcus Carder
                </Text>
                <Img
                  src="images/img_frame_27.svg"
                  className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Frame"
                />
              </Row>
              <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Row className="w-[23%]">
                  <Column className="w-[24%]">
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                      Home
                    </Text>
                    <Column className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                      <div className="bg-gray_900 h-[1px] w-[100%]"></div>
                    </Column>
                  </Column>
                  <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                    List
                  </Text>
                  <Text className="font-normal lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                    About
                  </Text>
                </Row>
                <Column className="items-center mt-[1px] w-[100%]">
                  <Line className="bg-black_900 h-[1px] opacity-op12 w-[100%]" />
                </Column>
              </Column>
            </Column>
            <Column className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Row className="justify-between w-[100%]">
                <Column className="w-[72%]">
                  <Text className="font-bold font-sfprodisplay xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                    Some UI/UX Design Terminologies.
                  </Text>
                  <Text className="font-charter font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                    Drum rolls 🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁 HAPPY NEW YEAR!!!! So having
                    worked
                  </Text>
                  <Column className="font-sfprodisplay items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center w-[56%]">
                        <Text className="font-normal not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-green_801 w-[auto]">
                          <span className="text-green_801 font-sfprodisplay">
                            Designlab{" "}
                          </span>
                          <span className="text-gray_600 font-sfprodisplay">
                            in
                          </span>
                          <span className="text-green_801 font-sfprodisplay">
                            {" "}
                            Bootcamp
                          </span>
                        </Text>
                        <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[auto]">
                          <span className="text-gray_600 font-sfprodisplay">
                            4 min read{" "}
                          </span>
                          <span className="text-gray_600 font-sfprodisplay">
                            {" "}
                            ·{" "}
                          </span>
                          <span className="text-gray_600 font-sfprodisplay">
                            Selected for you
                          </span>
                        </Text>
                      </Row>
                      <Img
                        src="images/img_group14_8.svg"
                        className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                        alt="Group14"
                      />
                    </Row>
                  </Column>
                </Column>
                <Img
                  src="images/img_image1_8.png"
                  className="3xl:h-[100px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] w-[15%]"
                  alt="image1"
                />
              </Row>
              <Line className="bg-black_900 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] opacity-op12 w-[100%]" />
            </Column>
          </Column>
          <Column className="lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[161px] w-[20%]">
            <Column className="items-center w-[100%]">
              <Button
                className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[100%]"
                shape="CircleBorder31"
                size="lg"
                variant="FillGray901"
              >
                Update
              </Button>
              <Stack className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                <Img
                  src="images/img_frame_28.svg"
                  className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] inset-y-[0] left-[3%] my-[auto] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                  alt="Frame"
                />
                <Input
                  className="absolute font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                  wrapClassName="absolute inset-[0] m-[0] w-[100%]"
                  name="Search"
                  placeholder="Search"
                ></Input>
              </Stack>
            </Column>
            <Column className="lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[35%]">
              <Img
                src="images/img_unsplash0fn7fx.png"
                className="lg:h-[52px] xl:h-[59px] 2xl:h-[67px] 3xl:h-[80px] rounded-radius50 lg:w-[51px] xl:w-[58px] 2xl:w-[66px] 3xl:w-[79px]"
                alt="unsplash0fN7Fx"
              />
              <Text className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                Marcus Carder
              </Text>
              <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-green_800 w-[auto]">
                Edit profile
              </Text>
            </Column>
            <Text className="font-normal xl:leading-[10px] 2xl:leading-[12px] 3xl:leading-[14px] lg:leading-[9px] lg:mt-[315px] xl:mt-[360px] 2xl:mt-[406px] 3xl:mt-[487px] not-italic lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_600 w-[89%]">
              Help Status Writers Blog Careers Privacy Terms About
              <br />
              Knowable
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default YourStories1Page;
