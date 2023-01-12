import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Line,
  Text,
  List,
  Button,
  Stack,
  Input,
} from "components";

const HomePagePage = () => {
  const navigate = useNavigate();

  function handleNavigate24() {
    navigate("/createstory");
  }
  function handleNavigate25() {
    navigate("/yourstories1");
  }

  return (
    <>
      <Column className="bg-white_A700 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Row className="items-center w-[77%]">
          <Row className="items-center justify-evenly w-[7%]">
            <Column className="bg-white_A700 items-center w-[100%]">
              <Img
                src="images/img_frame.svg"
                className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[39%]"
                alt="Frame"
              />
              <Column className="items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[156px] xl:mt-[178px] 2xl:mt-[201px] 3xl:mt-[241px] w-[23%]">
                <Img
                  src="images/img_group1.svg"
                  className="lg:h-[118px] xl:h-[135px] 2xl:h-[151px] 3xl:h-[182px] w-[100%]"
                  alt="Group1"
                />
                <Line className="bg-black_900 h-[1px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] opacity-op8 w-[100%]" />
                <Img
                  src="images/img_frame_1.svg"
                  className="common-pointer lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                  onClick={handleNavigate24}
                  alt="Frame"
                />
              </Column>
              <Img
                src="images/img_unsplashhskble.png"
                className="common-pointer lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[156px] xl:mt-[179px] 2xl:mt-[201px] 3xl:mt-[242px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                onClick={handleNavigate25}
                alt="unsplashhSKBle"
              />
            </Column>
            <Line className="bg-black_900 h-[1px] opacity-op12 rotate-[90deg] w-[1%]" />
          </Row>
          <Column className="2xl:ml-[111px] 3xl:ml-[134px] lg:ml-[86px] xl:ml-[99px] w-[50%]">
            <Row className="items-center w-[37%]">
              <Img
                src="images/img_group6.svg"
                className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                alt="Group6"
              />
              <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic opacity-op81 xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                Keep up with the latest in any topic
              </Text>
            </Row>
            <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Column className="w-[100%]">
                <Row className="w-[27%]">
                  <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_400 w-[auto]">
                    Following
                  </Text>
                  <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[52%]">
                    <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                      Recommended
                    </Text>
                    <Column className="items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
                      <Line className="bg-gray_900 h-[undefinedpx] w-[100%]" />
                    </Column>
                  </Column>
                </Row>
                <Column className="items-center mt-[1px] w-[100%]">
                  <Line className="bg-black_900 h-[1px] opacity-op12 w-[100%]" />
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                orientation="vertical"
              >
                <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Column className="w-[100%]">
                        <Row className="items-center w-[28%]">
                          <Img
                            src="images/img_unsplashpy2ljb.png"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            alt="unsplashPY2lJb"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                            <span className="text-gray_900 font-sfprodisplay">
                              Edet{" "}
                            </span>
                            <span className="text-gray_900 font-sfprodisplay">
                              Noah
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                            </span>
                            <span className="text-gray_600 font-sfprodisplay">
                              in
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                            </span>
                            <span className="text-gray_900 font-sfprodisplay">
                              Bootcamp
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                              ·{" "}
                            </span>
                            <span className="text-gray_600 font-sfprodisplay">
                              Jan 5
                            </span>
                          </Text>
                        </Row>
                        <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Column className="w-[72%]">
                              <Text className="font-bold font-sfprodisplay lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                                Some UI/UX Design Terminologies.
                              </Text>
                              <Text className="font-charter font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[100%]">
                                Drum rolls 🥁🥁🥁🥁🥁🥁🥁🥁🥁🥁 HAPPY NEW
                                YEAR!!!! So having worked with some Developers,
                                Project/Product managers I discovered that
                                sometimes they find it difficult to communicate
                                well with UI/UX designers
                              </Text>
                            </Column>
                            <Img
                              src="images/img_image1.png"
                              className="3xl:h-[100px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] w-[15%]"
                              alt="image1"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[72%]">
                      <Row className="items-center w-[51%]">
                        <Button className="font-normal not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-center w-[37%]">
                          Ui/Ux Designer
                        </Button>
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
                        src="images/img_group14.svg"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:ml-[118px] xl:ml-[135px] 2xl:ml-[152px] 3xl:ml-[182px] w-[11%]"
                        alt="Group14"
                      />
                    </Row>
                  </Column>
                  <Line className="bg-black_900 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] opacity-op12 w-[100%]" />
                </Column>
                <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Column className="w-[100%]">
                        <Row className="items-center w-[25%]">
                          <Img
                            src="images/img_unsplashohkelo.png"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            alt="unsplashOhKElO"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                            <span className="text-gray_900 font-sfprodisplay">
                              Ahmedbelaid
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                              ·{" "}
                            </span>
                            <span className="text-gray_600 font-sfprodisplay">
                              9 hour ago
                            </span>
                          </Text>
                        </Row>
                        <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Column className="w-[72%]">
                              <Text className="font-bold font-sfprodisplay lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                                5 Key Principles For A Modern Web Design
                              </Text>
                              <Text className="font-charter font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[100%]">
                                When we talk about web design, we are referring
                                to the general look of a website. It is the
                                process of planning and building the elements of
                                your website, from structure to layout,
                                including colors, fonts, and images. A
                              </Text>
                            </Column>
                            <Img
                              src="images/img_image1_1.png"
                              className="3xl:h-[100px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] w-[15%]"
                              alt="image1"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[72%]">
                      <Row className="items-center w-[61%]">
                        <Button className="font-normal not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-center w-[25%]">
                          Web Design
                        </Button>
                        <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[auto]">
                          <span className="text-gray_600 font-sfprodisplay">
                            9 min read{" "}
                          </span>
                          <span className="text-gray_600 font-sfprodisplay">
                            {" "}
                            · Based on your reading history
                          </span>
                        </Text>
                      </Row>
                      <Img
                        src="images/img_group14_1.svg"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[86px] xl:ml-[98px] w-[11%]"
                        alt="Group14"
                      />
                    </Row>
                  </Column>
                  <Line className="bg-black_900 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] opacity-op12 w-[100%]" />
                </Column>
                <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Column className="w-[100%]">
                        <Row className="items-center w-[28%]">
                          <Img
                            src="images/img_unsplash2crxtr.png"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius50 lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                            alt="unsplash2crxTr"
                          />
                          <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900 w-[auto]">
                            <span className="text-gray_900 font-sfprodisplay">
                              Edet{" "}
                            </span>
                            <span className="text-gray_900 font-sfprodisplay">
                              Noah
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                            </span>
                            <span className="text-gray_600 font-sfprodisplay">
                              in
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                            </span>
                            <span className="text-gray_900 font-sfprodisplay">
                              Bootcamp
                            </span>
                            <span className="text-black_900 font-sfprodisplay">
                              {" "}
                              ·{" "}
                            </span>
                            <span className="text-gray_600 font-sfprodisplay">
                              Jan 5
                            </span>
                          </Text>
                        </Row>
                        <Column className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Column className="w-[72%]">
                              <Text className="font-bold font-sfprodisplay lg:leading-[16px] xl:leading-[18px] 2xl:leading-[21px] 3xl:leading-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[82%]">
                                TOP 10 Mobile App UI Design Ideas in 2022 |
                                <br />
                                AppMaster.io
                              </Text>
                              <Text className="font-charter font-normal lg:leading-[14px] xl:leading-[16px] 2xl:leading-[18px] 3xl:leading-[21px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[100%]">
                                If the mobile app doesn’t correspond to the
                                latest design trends, it will probably be out of
                                users’ interest. Making the app look modern and
                              </Text>
                            </Column>
                            <Img
                              src="images/img_image1_2.png"
                              className="3xl:h-[100px] lg:h-[65px] xl:h-[75px] 2xl:h-[84px] w-[15%]"
                              alt="image1"
                            />
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Row className="items-center lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[72%]">
                      <Row className="items-center w-[38%]">
                        <Button className="font-normal lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-center lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]">
                          UI
                        </Button>
                        <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[auto]">
                          <span className="text-gray_600 font-sfprodisplay">
                            9 min read{" "}
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
                        src="images/img_group14_2.svg"
                        className="lg:h-[16px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:ml-[159px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] w-[11%]"
                        alt="Group14"
                      />
                    </Row>
                  </Column>
                  <Line className="bg-black_900 h-[1px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] opacity-op12 w-[100%]" />
                </Column>
              </List>
            </Column>
          </Column>
          <Column className="lg:ml-[104px] xl:ml-[119px] 2xl:ml-[134px] 3xl:ml-[161px] w-[21%]">
            <Column className="items-center w-[100%]">
              <Button
                className="font-normal lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[98%]"
                shape="CircleBorder31"
                size="lg"
                variant="FillGray901"
              >
                Update
              </Button>
              <Stack className="lg:h-[23px] xl:h-[26px] 2xl:h-[29px] 3xl:h-[35px] lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                <Img
                  src="images/img_frame_2.svg"
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
              <Column className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                <Text className="font-semibold ml-[2px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                  Recommended topics
                </Text>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <Column className="w-[100%]">
                    <Column className="items-center w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Button className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[30%]">
                          Figmatips
                        </Button>
                        <Button className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[31%]">
                          Ux Design
                        </Button>
                        <Button className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[19%]">
                          Film
                        </Button>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                        <Button className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[37%]">
                          Programming
                        </Button>
                        <Button className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[25%]">
                          Fitness
                        </Button>
                        <Button className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[33%]">
                          Ux Strategy
                        </Button>
                      </Row>
                    </Column>
                    <Button className="font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[27%]">
                      Protopie
                    </Button>
                  </Column>
                </Column>
              </Column>
              <Column className="lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                <Text className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                  Who to follow
                </Text>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                      <Row className="justify-between w-[78%]">
                        <Img
                          src="images/img_unsplashohkelo_1.png"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="unsplashOhKElO"
                        />
                        <Column className="w-[72%]">
                          <Text className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                            Jakob Carder
                          </Text>
                          <Text className="font-normal leading-[normal] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[100%]">
                            UI/UX Designer. Front-End Developer. Open to
                            freelancin..
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[21%]"
                        variant="OutlineGray900"
                      >
                        Follow
                      </Button>
                    </Row>
                    <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                      <Row className="justify-between w-[78%]">
                        <Img
                          src="images/img_unsplashzmmanl.png"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="unsplashZmmAnl"
                        />
                        <Column className="w-[72%]">
                          <Text className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                            Lydia Press
                          </Text>
                          <Text className="font-normal leading-[normal] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[100%]">
                            Born in 98, and permanently foolish. See me at
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[21%]"
                        variant="OutlineGray900"
                      >
                        Follow
                      </Button>
                    </Row>
                    <Row className="items-center justify-evenly lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[100%]">
                      <Row className="justify-between w-[78%]">
                        <Img
                          src="images/img_unsplashttsrji.png"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="unsplashttSRji"
                        />
                        <Column className="w-[72%]">
                          <Text className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                            Craig Geidt
                          </Text>
                          <Text className="font-normal leading-[normal] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_600 w-[100%]">
                            Born in 98, and permanently foolish. See me at
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-center w-[21%]"
                        variant="OutlineGray900"
                      >
                        Follow
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Column className="lg:mr-[3px] 2xl:mr-[4px] xl:mr-[4px] 3xl:mr-[5px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[98%]">
                <Text className="font-semibold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                  Reading list
                </Text>
                <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
                  <Stack className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[100%]">
                    <Text className="absolute bottom-[0] font-normal lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_600 w-[100%]">
                      Click the on any story to easily add it to your reading
                      list or a custom list that you can share.
                    </Text>
                    <Img
                      src="images/img_frame_3.svg"
                      className="absolute lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] left-[18%] top-[0] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
                      alt="Frame"
                    />
                  </Stack>
                </Column>
              </Column>
            </Column>
            <Text className="font-normal xl:leading-[10px] 2xl:leading-[12px] 3xl:leading-[14px] lg:leading-[9px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-gray_600 w-[87%]">
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

export default HomePagePage;
