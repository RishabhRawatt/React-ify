import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import TransactionTable from "./Components/TransactionTable";
import { BsSearch } from "react-icons/bs";

const TransactionsPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];

  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload}></Icon>}>
          Export CSV
        </Button>
      </Flex>
      <Card borderRadius="16px">
        <Tabs>
          <TabList
            py="4"
            display="flex"
            w="full"
            justifyContent="space-between"
          >
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>Deposit</p>
            </TabPanel>
            <TabPanel>
              <p>Withdraw</p>
            </TabPanel>
            <TabPanel>
              <p>Trade</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default TransactionsPage;
