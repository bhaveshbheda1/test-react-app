import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button } from "components";

const CreatestoryPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/homepage");
  }

  return (
    <>
      <Column className="bg-white_A700 font-sfprodisplay items-center mx-[auto] w-[100%]">
        <Row className="items-center justify-between lg:mt-[16px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] w-[52%]">
          <Row
            className="common-pointer items-center w-[22%]"
            onClick={handleNavigate1}
          >
            <Img
              src="images/img_frame_36.svg"
              className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] w-[18%]"
              alt="Frame"
            />
            <Text className="font-normal xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
              Draft in Falgun Sonwane
            </Text>
          </Row>
          <Row className="items-center justify-between w-[20%]">
            <Button
              className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px] text-center w-[34%]"
              shape="CircleBorder41"
              size="sm"
              variant="FillGreen801"
            >
              Publish
            </Button>
            <Img
              src="images/img_frame_37.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
              alt="Frame"
            />
            <Img
              src="images/img_frame_38.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[23px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[22px]"
              alt="Frame"
            />
            <Img
              src="images/img_unsplashdprdrw.png"
              className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius50 lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
              alt="unsplashdpRdRW"
            />
          </Row>
        </Row>
        <Column className="font-charter lg:mb-[441px] xl:mb-[504px] 2xl:mb-[567px] 3xl:mb-[680px] lg:ml-[343px] xl:ml-[392px] 2xl:ml-[442px] 3xl:ml-[530px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[10%]">
          <Text className="font-normal lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] opacity-op3 lg:text-[24px] xl:text-[28px] 2xl:text-[31px] 3xl:text-[37px] text-black_900 w-[auto]">
            Title
          </Text>
          <Column className="items-center xl:mt-[4px] lg:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
            <Row className="items-center w-[100%]">
              <Img
                src="images/img_group51.svg"
                className="lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:w-[18px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                alt="Group51"
              />
              <Text className="font-normal lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] opacity-op3 lg:text-[12px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] text-black_900 w-[auto]">
                Tell your story...
              </Text>
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CreatestoryPage;
