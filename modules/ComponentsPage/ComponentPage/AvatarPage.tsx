import React from 'react';

import { StarIcon } from '@radix-ui/react-icons';

import Avatar from '@/components/Avatar';

export default function AvatarPage() {
  return (
    <div className="flex justify-between">
      <Avatar
        src="https://img.freepik.com/premium-photo/3d-rendering-half-body-bearded-male-character-wearing-eyeglasses-red-flannel_477250-77.jpg?w=1380"
        alt="it's me"
      />

      <Avatar radius="xl" />

      <Avatar
        color="cyan-500"
        radius="full"
      >
        MK
      </Avatar>

      <Avatar
        color="blue-500"
        radius="xl"
      >
        <StarIcon
          color="blue"
          width={25}
          height={25}
        />
      </Avatar>
    </div>
  );
}
