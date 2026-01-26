import React from 'react';

interface DeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  itemName?: string;
  isLoading?: boolean;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  itemName,
  isLoading = false,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Dialog */}
        <div className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center">
                <span className="material-icons-outlined text-red-600 dark:text-red-400 text-2xl">
                  warning
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                  {description}
                </p>
                {itemName && (
                  <div className="mt-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {itemName}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <span className="material-icons-outlined text-amber-600 dark:text-amber-400 text-sm mt-0.5">
                  info
                </span>
                <p className="text-xs text-amber-800 dark:text-amber-300">
                  This action cannot be undone. All data associated with this item will be permanently removed.
                </p>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 flex justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Deleting...
                </>
              ) : (
                <>
                  <span className="material-icons-outlined text-sm">delete</span>
                  Delete
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;