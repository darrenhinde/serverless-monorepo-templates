"use client";

import { useStorageUpload } from "@/hooks/useStorageUpload";
import { CreateEmployeeSchema } from "@nextsystems/schemas/EmployeeSchema";
import { Avatar, Button, FileButton, Flex, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import {
  IconBriefcase,
  IconMail,
  IconUpload,
  IconUser,
} from "@tabler/icons-react";

export type CreateEmployeeFormProps = {
  onSubmit: (values: CreateEmployeeSchema) => void;
  loading?: boolean;
};

export const CreateEmployeeForm = (props: CreateEmployeeFormProps) => {
  const form = useForm({
    mode: "uncontrolled",
    validate: zodResolver(CreateEmployeeSchema),
    initialValues: {
      name: "",
      email: "",
      job: "",
      image: "",
    },
  });

  const { uploadFile, isUploading, uploadedUrl } = useStorageUpload();

  const handleAvatarUpload = async (file: File | null) => {
    if (file) {
      try {
        const objectKey = `avatars/${crypto.randomUUID()}.${file.type.split("/")[1]}`;

        const uploadedUrl = await uploadFile(file, objectKey);

        if (uploadedUrl) {
          form.setFieldValue("image", uploadedUrl);
        }
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  };

  return (
    <form onSubmit={form.onSubmit(props.onSubmit)}>
      <Flex direction="column" gap="md" flex="1">
        <Flex align="center" direction="column" mb="md">
          <Avatar size="xl" src={uploadedUrl} radius="lg" mb="xs" />
          <FileButton
            onChange={handleAvatarUpload}
            accept="image/png,image/jpeg"
          >
            {({ onClick }) => (
              <Button
                onClick={onClick}
                loading={isUploading}
                variant="subtle"
                leftSection={<IconUpload size={14} />}
              >
                Upload avatar
              </Button>
            )}
          </FileButton>
        </Flex>

        <TextInput
          label="Name"
          placeholder="John Doe"
          key={form.key("name")}
          leftSection={<IconUser />}
          {...form.getInputProps("name")}
        />

        <TextInput
          label="Email"
          placeholder="your@email.com"
          key={form.key("email")}
          leftSection={<IconMail />}
          {...form.getInputProps("email")}
        />

        <TextInput
          label="Job"
          placeholder="Software Engineer"
          key={form.key("job")}
          leftSection={<IconBriefcase />}
          {...form.getInputProps("job")}
        />

        <Button mt="md" type="submit" loading={props.loading}>
          Create
        </Button>
      </Flex>
    </form>
  );
};
