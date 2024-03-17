import { Form, Modal, Select } from 'antd'
import { ProjectList } from './List'
import { useGo } from '@refinedev/core'
import { useModalForm, useSelect } from '@refinedev/antd'
import { CREATE_COMPANY_MUTATION } from '@/graphql/mutations'
import { UsersSelectQuery } from '@/graphql/types'
import { GetFieldsFromList } from '@refinedev/nestjs-query'
import { USERS_SELECT_QUERY } from '@/graphql/queries'
import { SelectOptionWithAvatar } from '@/components/select-option-with-avatar'

export const Create = () => {
    const go = useGo()

    const goToListPage = () => {
      go({
        to: { resource: "Companies", action: "list" },
        options: {
          keepQuery: true,
        },
        type: "replace",
      });
    };


    const { formProps, modalProps } = useModalForm({
      action: "create",
      defaultVisible: true,
      resource: "Companies",
      redirect: false,
      mutationMode: "pessimistic",
      onMutationSuccess: goToListPage,
      meta: {
        gqlMutation: CREATE_COMPANY_MUTATION,
      }
    })
    const { selectProps, queryResult } = useSelect<
    GetFieldsFromList<UsersSelectQuery>
  >({
    resource: "users",
    meta: {
      gqlQuery: USERS_SELECT_QUERY,
    },
    optionLabel: "name",
  });

  return (
    <ProjectList>
      <Modal
      {...modalProps}
      mask={true}
      onCancel={goToListPage}
      title="Add new Project"
      width={512}
      >
       <Form {...formProps} layout='vertical'>
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true}]}>
            <input placeholder='please enter a Project name'/>
          </Form.Item>
          <Form.Item
          label="Sales owner"
          name="salesOwnerId"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Please sales owner user"
            {...selectProps}
            options={
              queryResult.data?.data?.map((user) => ({
                value: user.id,
                label: (
                  <SelectOptionWithAvatar
                    name={user.name}
                    avatarUrl={user.avatarUrl ?? undefined}
                  />
                ),
              })) ?? []
            }
          />
        </Form.Item>
      </Form>















          {/* <Form.Item
          label="Project Description"
          name="description"
          rules={[{ required: true}]}>
            <input placeholder='please enter a Project description'/>
          </Form.Item>

          <Form.Item
          label="Project Status"
          name="status"
          rules={[{ required: true}]}>
            <input placeholder='please enter a Project status'/>
          </Form.Item>

          <Form.Item
          label="Contact Number"
          name="contact number"
          rules={[{ required: true}]}>
            <input placeholder='please enter a contact number'/>
          </Form.Item> */}
        
      </Modal>

    </ProjectList>




  )
}

export default Create
