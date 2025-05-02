import { test, expect } from 'vitest';
import { actions, models } from '@teamkeel/testing';
import { InventoryLocationType } from '@teamkeel/sdk';

test('create empty inventory location as admin', async () => {
    const identity = await models.identity.create({
        email: 'alvaro.guimaraes@themodernmilkman.co.uk',
        emailVerified: true,
    });

    const location = await actions.withIdentity(identity).createInventoryLocation({
        address: '1 Alder Way, Holmes Chapel, Cheshire, CW4 8AD',
        type: InventoryLocationType.Warehouse,
    })

    expect(location).not.toHaveAuthorizationError();
    
    const result = await actions.withIdentity(identity).getInventoryLocation({id: location.id});

    expect(result).not.toHaveAuthorizationError();

    expect(result).toEqual(location);
});
