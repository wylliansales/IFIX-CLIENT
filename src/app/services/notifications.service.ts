declare var $: any;

export class NotificationsService{
    showNotification(message: string, type: string){

        $.notify({
            icon: '',
            message: `<h5>${message}</h5>`
        },{
            type: type,
            timer: 800,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    }
}